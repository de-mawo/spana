-- AlterTable
ALTER TABLE "User" ADD COLUMN     "activateAccToken" TEXT,
ADD COLUMN     "activateAccTokenExpires" TIMESTAMP(3),
ADD COLUMN     "passwordResetExpires" TIMESTAMP(3),
ADD COLUMN     "passwordResetToken" TEXT,
ALTER COLUMN "image" SET DEFAULT 'https://res.cloudinary.com/demawo/image/upload/v1674075785/avatar_vehl5k.png';
