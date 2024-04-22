-- CreateTable
CREATE TABLE "User" (
    "id" VARCHAR(36) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "address" TEXT NOT NULL,
    "deviceType" TEXT NOT NULL,
    "token" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bridge" (
    "id" VARCHAR(36) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "src_address" TEXT NOT NULL,
    "dst_address" TEXT NOT NULL,
    "src_chain" TEXT NOT NULL,
    "dst_chain" TEXT NOT NULL,
    "src_token" TEXT NOT NULL,
    "dst_token" TEXT NOT NULL,
    "src_amount" DECIMAL(65,30) NOT NULL,
    "dst_amount" DECIMAL(65,30) NOT NULL,
    "tx_hash" TEXT NOT NULL,
    "route" TEXT NOT NULL,

    CONSTRAINT "Bridge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DCA" (
    "id" VARCHAR(36) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "address" TEXT NOT NULL,
    "dca_key" TEXT NOT NULL,
    "input_token" TEXT NOT NULL,
    "output_token" TEXT NOT NULL,
    "in_amount" DECIMAL(65,30) NOT NULL,
    "out_amount" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "DCA_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Limit" (
    "id" VARCHAR(36) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "address" TEXT NOT NULL,
    "in_token" TEXT NOT NULL,
    "out_token" TEXT NOT NULL,
    "in_amount" DECIMAL(65,30) NOT NULL,
    "out_amount" DECIMAL(65,30) NOT NULL,
    "buy_rate" DECIMAL(65,30) NOT NULL,
    "tx_hash" TEXT NOT NULL,
    "expiry" TEXT NOT NULL,

    CONSTRAINT "Limit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activity" (
    "id" VARCHAR(36) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "activity_type" TEXT NOT NULL,
    "activity" JSONB NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "activity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_address_key" ON "User"("address");
