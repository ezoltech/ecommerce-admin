'use client'
import { useEffect } from "react";
import { useIsOnline } from 'react-use-is-online';
import Lottie from "react-lottie-player";
import lottieJson from "./Internet-animation.json";
import { useStoreModal } from "@/hooks/use-store-modal";

const Home = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);
  const isOnline = useIsOnline();

  useEffect(() => {
    if (!isOpen && isOnline) {
      onOpen();
    }
  }, [isOpen, onOpen, isOnline]);

  return (
    <div className="flex items-center justify-center h-screen">
      {isOnline ? (
        <p className="text-center">Content when online</p>
      ) : (
        <div className="text-center">
          <p>No internet connection !, please check your internet connection and try again</p>
          <Lottie
            animationData={lottieJson}
            play
            className="max-w-full h-auto"
          />
        </div>
      )}
    </div>
  );
};

export default Home;
