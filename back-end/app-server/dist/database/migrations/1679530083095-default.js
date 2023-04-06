"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1679530083095 = void 0;
class default1679530083095 {
    constructor() {
        this.name = 'default1679530083095';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`department\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`acronym\` varchar(255) NOT NULL, \`companyId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`company\` ADD \`company_createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`department\` ADD CONSTRAINT \`FK_1c9f0159b4ae69008bd356bb1ce\` FOREIGN KEY (\`companyId\`) REFERENCES \`company\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`department\` DROP FOREIGN KEY \`FK_1c9f0159b4ae69008bd356bb1ce\``);
        await queryRunner.query(`ALTER TABLE \`company\` DROP COLUMN \`company_createdAt\``);
        await queryRunner.query(`DROP TABLE \`department\``);
    }
}
exports.default1679530083095 = default1679530083095;
