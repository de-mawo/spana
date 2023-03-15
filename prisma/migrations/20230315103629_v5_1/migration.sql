/*
  Warnings:

  - You are about to drop the column `userId` on the `Balances` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Balances" DROP CONSTRAINT "Balances_userId_fkey";

-- AlterTable
ALTER TABLE "Balances" DROP COLUMN "userId",
ADD COLUMN     "email" TEXT NOT NULL DEFAULT 'null';

-- AddForeignKey
ALTER TABLE "Balances" ADD CONSTRAINT "Balances_email_fkey" FOREIGN KEY ("email") REFERENCES "User"("email") ON DELETE CASCADE ON UPDATE CASCADE;
