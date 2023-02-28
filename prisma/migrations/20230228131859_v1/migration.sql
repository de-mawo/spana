-- CreateEnum
CREATE TYPE "LeaveType" AS ENUM ('ANNUAL', 'HEALTH', 'STUDY', 'MATERNITY', 'UNPAID', 'FAMILY', 'PATERNITY');

-- CreateTable
CREATE TABLE "Leave" (
    "id" TEXT NOT NULL,
    "type" "LeaveType" NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "daysRequested" DOUBLE PRECISION NOT NULL,
    "requestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "requestedBy" TEXT NOT NULL,
    "requesterNote" TEXT,
    "requesterEmail" TEXT NOT NULL,
    "approved" BOOLEAN NOT NULL DEFAULT false,
    "rejected" BOOLEAN NOT NULL DEFAULT false,
    "moderatedBy" TEXT NOT NULL DEFAULT 'null',
    "moderatorNote" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Leave_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AddDays" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "daysRequested" DOUBLE PRECISION NOT NULL,
    "requestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "requestedBy" TEXT NOT NULL,
    "requesterNote" TEXT,
    "requesterEmail" TEXT NOT NULL,
    "approved" BOOLEAN NOT NULL DEFAULT false,
    "rejected" BOOLEAN NOT NULL DEFAULT false,
    "moderatedBy" TEXT NOT NULL DEFAULT 'null',
    "moderatorNote" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "AddDays_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Balances" (
    "id" TEXT NOT NULL,
    "annualCredit" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "annualUsed" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "annualRemaining" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "healthCredit" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "healthUsed" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "healthRemaining" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "studyCredit" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "studyUsed" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "studyRemaining" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "maternityCredit" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "maternityUsed" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "maternityRemaining" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "familyCredit" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "familyUsed" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "familyRemaining" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "paternityCredit" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "paternityUsed" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "paternityRemaining" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "unpaidUsed" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Balances_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Balances" ADD CONSTRAINT "Balances_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
