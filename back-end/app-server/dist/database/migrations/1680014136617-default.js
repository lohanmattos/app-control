"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1680014136617 = void 0;
class default1680014136617 {
    constructor() {
        this.name = 'default1680014136617';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`department\` ADD \`departament_createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`employee\` DROP FOREIGN KEY \`FK_f4b0d329c4a3cf79ffe9d565047\``);
        await queryRunner.query(`ALTER TABLE \`employee\` DROP FOREIGN KEY \`FK_8a0634703b54978a2fa6f775209\``);
        await queryRunner.query(`ALTER TABLE \`employee\` CHANGE \`userId\` \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`employee\` CHANGE \`sectionId\` \`sectionId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`section\` DROP FOREIGN KEY \`FK_2b9abc753299b5995303ab64b64\``);
        await queryRunner.query(`ALTER TABLE \`section\` CHANGE \`departamentId\` \`departamentId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`department\` DROP FOREIGN KEY \`FK_1c9f0159b4ae69008bd356bb1ce\``);
        await queryRunner.query(`ALTER TABLE \`department\` CHANGE \`companyId\` \`companyId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_618194d24a7ea86a165d7ec628e\``);
        await queryRunner.query(`ALTER TABLE \`product\` CHANGE \`productCategoryId\` \`productCategoryId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`employee\` ADD CONSTRAINT \`FK_f4b0d329c4a3cf79ffe9d565047\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`employee\` ADD CONSTRAINT \`FK_8a0634703b54978a2fa6f775209\` FOREIGN KEY (\`sectionId\`) REFERENCES \`section\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`section\` ADD CONSTRAINT \`FK_2b9abc753299b5995303ab64b64\` FOREIGN KEY (\`departamentId\`) REFERENCES \`department\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`department\` ADD CONSTRAINT \`FK_1c9f0159b4ae69008bd356bb1ce\` FOREIGN KEY (\`companyId\`) REFERENCES \`company\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_618194d24a7ea86a165d7ec628e\` FOREIGN KEY (\`productCategoryId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_618194d24a7ea86a165d7ec628e\``);
        await queryRunner.query(`ALTER TABLE \`department\` DROP FOREIGN KEY \`FK_1c9f0159b4ae69008bd356bb1ce\``);
        await queryRunner.query(`ALTER TABLE \`section\` DROP FOREIGN KEY \`FK_2b9abc753299b5995303ab64b64\``);
        await queryRunner.query(`ALTER TABLE \`employee\` DROP FOREIGN KEY \`FK_8a0634703b54978a2fa6f775209\``);
        await queryRunner.query(`ALTER TABLE \`employee\` DROP FOREIGN KEY \`FK_f4b0d329c4a3cf79ffe9d565047\``);
        await queryRunner.query(`ALTER TABLE \`product\` CHANGE \`productCategoryId\` \`productCategoryId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_618194d24a7ea86a165d7ec628e\` FOREIGN KEY (\`productCategoryId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`department\` CHANGE \`companyId\` \`companyId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`department\` ADD CONSTRAINT \`FK_1c9f0159b4ae69008bd356bb1ce\` FOREIGN KEY (\`companyId\`) REFERENCES \`company\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`section\` CHANGE \`departamentId\` \`departamentId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`section\` ADD CONSTRAINT \`FK_2b9abc753299b5995303ab64b64\` FOREIGN KEY (\`departamentId\`) REFERENCES \`department\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`employee\` CHANGE \`sectionId\` \`sectionId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`employee\` CHANGE \`userId\` \`userId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`employee\` ADD CONSTRAINT \`FK_8a0634703b54978a2fa6f775209\` FOREIGN KEY (\`sectionId\`) REFERENCES \`section\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`employee\` ADD CONSTRAINT \`FK_f4b0d329c4a3cf79ffe9d565047\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`department\` DROP COLUMN \`departament_createdAt\``);
    }
}
exports.default1680014136617 = default1680014136617;
