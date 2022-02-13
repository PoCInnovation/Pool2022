/*
  Warnings:

  - Added the required column `rating` to the `Music` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Music" ADD COLUMN     "rating" INTEGER NOT NULL;
