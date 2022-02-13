-- CreateTable
CREATE TABLE "Artist" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "nationality" TEXT NOT NULL,
    "musicGender" TEXT NOT NULL,
    "photoUrl" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Artist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Artist_name_key" ON "Artist"("name");

-- AddForeignKey
ALTER TABLE "Artist" ADD CONSTRAINT "Artist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
