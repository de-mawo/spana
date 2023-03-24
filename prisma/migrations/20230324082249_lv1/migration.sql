-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'MODERATOR');

-- CreateEnum
CREATE TYPE "LeaveType" AS ENUM ('ANNUAL', 'HEALTH', 'STUDY', 'MATERNITY', 'UNPAID', 'FAMILY', 'PATERNITY');

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT DEFAULT 'https://res.cloudinary.com/demawo/image/upload/v1674075785/avatar_vehl5k.png',
    "role" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "phone" TEXT,
    "jobTitle" TEXT,
    "email" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

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
    "link" TEXT,
    "requesterEmail" TEXT NOT NULL,
    "approved" BOOLEAN DEFAULT false,
    "rejected" BOOLEAN DEFAULT false,
    "moderatedBy" TEXT NOT NULL DEFAULT 'null',
    "moderatorNote" TEXT DEFAULT '',

    CONSTRAINT "Leave_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AddDays" (
    "id" TEXT NOT NULL,
    "type" "LeaveType" NOT NULL,
    "daysRequested" DOUBLE PRECISION NOT NULL,
    "requestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "requestedBy" TEXT NOT NULL,
    "requesterNote" TEXT,
    "requesterEmail" TEXT NOT NULL,
    "approved" BOOLEAN DEFAULT false,
    "rejected" BOOLEAN DEFAULT false,
    "moderatedBy" TEXT NOT NULL DEFAULT 'null',
    "moderatorNote" TEXT DEFAULT '',

    CONSTRAINT "AddDays_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Balances" (
    "id" TEXT NOT NULL,
    "period" TEXT NOT NULL DEFAULT '2023',
    "annualCredit" DOUBLE PRECISION DEFAULT 0,
    "annualUsed" DOUBLE PRECISION DEFAULT 0,
    "annualRemaining" DOUBLE PRECISION DEFAULT 0,
    "healthCredit" DOUBLE PRECISION DEFAULT 0,
    "healthUsed" DOUBLE PRECISION DEFAULT 0,
    "healthRemaining" DOUBLE PRECISION DEFAULT 0,
    "studyCredit" DOUBLE PRECISION DEFAULT 0,
    "studyUsed" DOUBLE PRECISION DEFAULT 0,
    "studyRemaining" DOUBLE PRECISION DEFAULT 0,
    "maternityCredit" DOUBLE PRECISION DEFAULT 0,
    "maternityUsed" DOUBLE PRECISION DEFAULT 0,
    "maternityRemaining" DOUBLE PRECISION DEFAULT 0,
    "familyCredit" DOUBLE PRECISION DEFAULT 0,
    "familyUsed" DOUBLE PRECISION DEFAULT 0,
    "familyRemaining" DOUBLE PRECISION DEFAULT 0,
    "paternityCredit" DOUBLE PRECISION DEFAULT 0,
    "paternityUsed" DOUBLE PRECISION DEFAULT 0,
    "paternityRemaining" DOUBLE PRECISION DEFAULT 0,
    "unpaidUsed" DOUBLE PRECISION DEFAULT 0,
    "name" TEXT NOT NULL DEFAULT 'null',
    "email" TEXT NOT NULL DEFAULT 'null',

    CONSTRAINT "Balances_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_email_key" ON "Profile"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_email_fkey" FOREIGN KEY ("email") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Balances" ADD CONSTRAINT "Balances_email_fkey" FOREIGN KEY ("email") REFERENCES "User"("email") ON DELETE CASCADE ON UPDATE CASCADE;
