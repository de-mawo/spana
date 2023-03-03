/*
  Warnings:

  - Changed the type of `type` on the `AddDays` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "AddDays" DROP COLUMN "type",
ADD COLUMN     "type" "LeaveType" NOT NULL;
