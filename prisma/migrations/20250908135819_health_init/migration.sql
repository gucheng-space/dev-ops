-- CreateTable
CREATE TABLE "public"."Health" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Health_pkey" PRIMARY KEY ("id")
);
