"use client";
import React from "react";
import { motion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";

export const HoverCard = () => {
  return (
    <div className="w-full">
      <motion.div
        whileHover="hover"
        className="relative h-96 w-full rounded-xl bg-gradient-to-br from-purple-700 to-blue-400 p-8"
      >
        <div className="relative z-10 h-full w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex h-full flex-col justify-between"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white">Aceternity UI</h3>
              <p className="text-lg text-white/80">
                Explore componentes modernos e animados para sua aplicação React
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white">Saiba mais</span>
              <IconArrowRight className="h-4 w-4 text-white" />
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={{
            hover: {
              scale: 1.5,
              opacity: 0.3,
              transition: { duration: 0.5 },
            },
          }}
          className="absolute inset-0 z-0 bg-gradient-to-br from-purple-800 to-blue-500 opacity-50 blur-xl"
        />
      </motion.div>
    </div>
  );
}; 