import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateFilmes1777339590566 implements MigrationInterface {
    name = 'CreateFilmes1777339590566'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "filmes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "director" character varying NOT NULL, "release_date" date NOT NULL, "genre" character varying NOT NULL, "synopsis" text NOT NULL, "lead_actors" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e7531027ca859ab4acb3a313658" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "filmes"`);
    }

}
