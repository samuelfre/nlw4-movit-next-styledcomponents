import Cookies from 'js-cookie'
import { createContext, useState, ReactNode, useEffect } from 'react'
import challenges from '../../challenges.json'
import { LevelUpModal } from '../components/LevelUpModal';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number,
  currentExperience: number,
  challengesCompleted: number,
  activeChallenge: Challenge,
  experienceToNextLevel: number,
  resetChallenge: () => void;
  completeChallenge: () => void;
  levelUp: () => void;
  startNewChallenge: () => void;
  closeLevelUpModal: () => void;
}

interface ChallengeProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;

}


export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children, ...rest }: ChallengeProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setcurrentExperience] = useState(rest.currentExperience ?? 0);
  const [challengesCompleted, setchallengesCompleted] = useState(rest.challengesCompleted ?? 0);
  const [activeChallenge, setactiveChallenge] = useState(null);
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);
  const [isLevelUpModalOpen, setisLevelUpModalOpen] = useState(false);

  useEffect(() => {
    Notification.requestPermission();
  }, []); //Executa apenas uma vez(Array vazio []), quando o componente é exibido em tela.

  useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('challengesCompleted', String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  function levelUp() {
    setLevel(level + 1);
    setisLevelUpModalOpen(true);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setactiveChallenge(challenge);

    new Audio('/notification.mp3').play();
    //mdn notification
    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🔥', {
        body: `Valendo ${challenge.amount} xp!`
      })
    }
  }

  function resetChallenge() {
    setactiveChallenge(null);

  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;
    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }
    setcurrentExperience(finalExperience);
    setactiveChallenge(null);
    setchallengesCompleted(challengesCompleted + 1);


  }

  function closeLevelUpModal() {
    setisLevelUpModalOpen(false);
  }

  return (
    <ChallengesContext.Provider
      value=
      {{
        level,
        currentExperience,
        challengesCompleted,
        levelUp,
        startNewChallenge,
        activeChallenge,
        experienceToNextLevel,
        completeChallenge,
        resetChallenge,
        closeLevelUpModal
      }}>
      {children}
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>

  );
}