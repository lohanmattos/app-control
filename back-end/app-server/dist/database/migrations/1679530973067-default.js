"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1679530973067 = void 0;
class default1679530973067 {
    constructor() {
        this.name = 'default1679530973067';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`employee\` (\`id\` int NOT NULL AUTO_INCREMENT, \`first_name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`cpf\` varchar(255) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`employeeId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD UNIQUE INDEX \`IDX_ab4a80281f1e8d524714e00f38\` (\`employeeId\`)`);
        await queryRunner.query(`ALTER TABLE \`section\` DROP FOREIGN KEY \`FK_2b9abc753299b5995303ab64b64\``);
        await queryRunner.query(`ALTER TABLE \`section\` CHANGE \`departamentId\` \`departamentId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`department\` DROP FOREIGN KEY \`FK_1c9f0159b4ae69008bd356bb1ce\``);
        await queryRunner.query(`ALTER TABLE \`department\` CHANGE \`companyId\` \`companyId\` int NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_ab4a80281f1e8d524714e00f38\` ON \`user\` (\`employeeId\`)`);
        await queryRunner.query(`ALTER TABLE \`section\` ADD CONSTRAINT \`FK_2b9abc753299b5995303ab64b64\` FOREIGN KEY (\`departamentId\`) REFERENCES \`department\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`department\` ADD CONSTRAINT \`FK_1c9f0159b4ae69008bd356bb1ce\` FOREIGN KEY (\`companyId\`) REFERENCES \`company\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_ab4a80281f1e8d524714e00f38f\` FOREIGN KEY (\`employeeId\`) REFERENCES \`employee\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_ab4a80281f1e8d524714e00f38f\``);
        await queryRunner.query(`ALTER TABLE \`department\` DROP FOREIGN KEY \`FK_1c9f0159b4ae69008bd356bb1ce\``);
        await queryRunner.query(`ALTER TABLE \`section\` DROP FOREIGN KEY \`FK_2b9abc753299b5995303ab64b64\``);
        await queryRunner.query(`DROP INDEX \`REL_ab4a80281f1e8d524714e00f38\` ON \`user\``);
        await queryRunner.query(`ALTER TABLE \`department\` CHANGE \`companyId\` \`companyId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`department\` ADD CONSTRAINT \`FK_1c9f0159b4ae69008bd356bb1ce\` FOREIGN KEY (\`companyId\`) REFERENCES \`company\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`section\` CHANGE \`departamentId\` \`departamentId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`section\` ADD CONSTRAINT \`FK_2b9abc753299b5995303ab64b64\` FOREIGN KEY (\`departamentId\`) REFERENCES \`department\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP INDEX \`IDX_ab4a80281f1e8d524714e00f38\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`employeeId\``);
        await queryRunner.query(`DROP TABLE \`employee\``);
    }
}
exports.default1679530973067 = default1679530973067;
