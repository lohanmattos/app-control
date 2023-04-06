"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1680114914756 = void 0;
class default1680114914756 {
    constructor() {
        this.name = 'default1680114914756';
    }
    async up(queryRunner) {
        await queryRunner.query(`DROP INDEX \`FK_df4fd9a742a78cb775033ea8dd3\` ON \`check_product\``);
        await queryRunner.query(`DROP INDEX \`FK_52541b8187e8e6af82eeb801f41\` ON \`check_product\``);
        await queryRunner.query(`DROP INDEX \`FK_8a0634703b54978a2fa6f775209\` ON \`employee\``);
        await queryRunner.query(`DROP INDEX \`FK_dcacdb97ef1d86c168dd6b6bd56\` ON \`section\``);
        await queryRunner.query(`DROP INDEX \`FK_1c9f0159b4ae69008bd356bb1ce\` ON \`department\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_9f43b335df2357a0b3149e6bb5c\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_618194d24a7ea86a165d7ec628e\``);
        await queryRunner.query(`ALTER TABLE \`product\` CHANGE \`sectionId\` \`sectionId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` CHANGE \`productCategoryId\` \`productCategoryId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`check_product\` DROP FOREIGN KEY \`FK_5fb6f615ad3bfd5c1bc3e0e2138\``);
        await queryRunner.query(`ALTER TABLE \`check_product\` CHANGE \`productCodeId\` \`productCodeId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`check_product\` CHANGE \`sectionId\` \`sectionId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`check_product\` CHANGE \`userId\` \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`employee\` CHANGE \`userId\` \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`employee\` CHANGE \`sectionId\` \`sectionId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`section\` CHANGE \`departmentId\` \`departmentId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`department\` CHANGE \`companyId\` \`companyId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_9f43b335df2357a0b3149e6bb5c\` FOREIGN KEY (\`sectionId\`) REFERENCES \`section\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_618194d24a7ea86a165d7ec628e\` FOREIGN KEY (\`productCategoryId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`check_product\` ADD CONSTRAINT \`FK_df4fd9a742a78cb775033ea8dd3\` FOREIGN KEY (\`productCodeId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`check_product\` ADD CONSTRAINT \`FK_5fb6f615ad3bfd5c1bc3e0e2138\` FOREIGN KEY (\`sectionId\`) REFERENCES \`section\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`check_product\` ADD CONSTRAINT \`FK_52541b8187e8e6af82eeb801f41\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`employee\` ADD CONSTRAINT \`FK_f4b0d329c4a3cf79ffe9d565047\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`employee\` ADD CONSTRAINT \`FK_8a0634703b54978a2fa6f775209\` FOREIGN KEY (\`sectionId\`) REFERENCES \`section\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`section\` ADD CONSTRAINT \`FK_dcacdb97ef1d86c168dd6b6bd56\` FOREIGN KEY (\`departmentId\`) REFERENCES \`department\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`department\` ADD CONSTRAINT \`FK_1c9f0159b4ae69008bd356bb1ce\` FOREIGN KEY (\`companyId\`) REFERENCES \`company\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`department\` DROP FOREIGN KEY \`FK_1c9f0159b4ae69008bd356bb1ce\``);
        await queryRunner.query(`ALTER TABLE \`section\` DROP FOREIGN KEY \`FK_dcacdb97ef1d86c168dd6b6bd56\``);
        await queryRunner.query(`ALTER TABLE \`employee\` DROP FOREIGN KEY \`FK_8a0634703b54978a2fa6f775209\``);
        await queryRunner.query(`ALTER TABLE \`employee\` DROP FOREIGN KEY \`FK_f4b0d329c4a3cf79ffe9d565047\``);
        await queryRunner.query(`ALTER TABLE \`check_product\` DROP FOREIGN KEY \`FK_52541b8187e8e6af82eeb801f41\``);
        await queryRunner.query(`ALTER TABLE \`check_product\` DROP FOREIGN KEY \`FK_5fb6f615ad3bfd5c1bc3e0e2138\``);
        await queryRunner.query(`ALTER TABLE \`check_product\` DROP FOREIGN KEY \`FK_df4fd9a742a78cb775033ea8dd3\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_618194d24a7ea86a165d7ec628e\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_9f43b335df2357a0b3149e6bb5c\``);
        await queryRunner.query(`ALTER TABLE \`department\` CHANGE \`companyId\` \`companyId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`section\` CHANGE \`departmentId\` \`departmentId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`employee\` CHANGE \`sectionId\` \`sectionId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`employee\` CHANGE \`userId\` \`userId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`check_product\` CHANGE \`userId\` \`userId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`check_product\` CHANGE \`sectionId\` \`sectionId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`check_product\` CHANGE \`productCodeId\` \`productCodeId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`check_product\` ADD CONSTRAINT \`FK_5fb6f615ad3bfd5c1bc3e0e2138\` FOREIGN KEY (\`sectionId\`) REFERENCES \`section\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product\` CHANGE \`productCategoryId\` \`productCategoryId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`product\` CHANGE \`sectionId\` \`sectionId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_618194d24a7ea86a165d7ec628e\` FOREIGN KEY (\`productCategoryId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_9f43b335df2357a0b3149e6bb5c\` FOREIGN KEY (\`sectionId\`) REFERENCES \`section\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`CREATE INDEX \`FK_1c9f0159b4ae69008bd356bb1ce\` ON \`department\` (\`companyId\`)`);
        await queryRunner.query(`CREATE INDEX \`FK_dcacdb97ef1d86c168dd6b6bd56\` ON \`section\` (\`departmentId\`)`);
        await queryRunner.query(`CREATE INDEX \`FK_8a0634703b54978a2fa6f775209\` ON \`employee\` (\`sectionId\`)`);
        await queryRunner.query(`CREATE INDEX \`FK_52541b8187e8e6af82eeb801f41\` ON \`check_product\` (\`userId\`)`);
        await queryRunner.query(`CREATE INDEX \`FK_df4fd9a742a78cb775033ea8dd3\` ON \`check_product\` (\`productCodeId\`)`);
    }
}
exports.default1680114914756 = default1680114914756;
