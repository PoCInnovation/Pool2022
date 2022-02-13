-- CreateTable
CREATE TABLE "Music" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "artistId" TEXT NOT NULL,

    CONSTRAINT "Music_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Music" ADD CONSTRAINT "Music_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
