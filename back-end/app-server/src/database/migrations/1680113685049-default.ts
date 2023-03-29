import { MigrationInterface, QueryRunner } from "typeorm";

export class default1680113685049 implements MigrationInterface {
    name = 'default1680113685049'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`department\` DROP FOREIGN KEY \`FK_1c9f0159b4ae69008bd356bb1ce\``);
        await queryRunner.query(`ALTER TABLE \`department\` CHANGE \`companyId\` \`companyId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`employee\` DROP FOREIGN KEY \`FK_f4b0d329c4a3cf79ffe9d565047\``);
        await queryRunner.query(`ALTER TABLE \`employee\` DROP FOREIGN KEY \`FK_8a0634703b54978a2fa6f775209\``);
        await queryRunner.query(`ALTER TABLE \`employee\` CHANGE \`userId\` \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`employee\` CHANGE \`sectionId\` \`sectionId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_9f43b335df2357a0b3149e6bb5c\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_618194d24a7ea86a165d7ec628e\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_c864ab8454ed95237e3721ab1cd\``);
        await queryRunner.query(`ALTER TABLE \`product\` CHANGE \`sectionId\` \`sectionId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` CHANGE \`productCategoryId\` \`productCategoryId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` CHANGE \`checkProductId\` \`checkProductId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`section\` DROP FOREIGN KEY \`FK_dcacdb97ef1d86c168dd6b6bd56\``);
        await queryRunner.query(`ALTER TABLE \`section\` CHANGE \`departmentId\` \`departmentId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`department\` ADD CONSTRAINT \`FK_1c9f0159b4ae69008bd356bb1ce\` FOREIGN KEY (\`companyId\`) REFERENCES \`company\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`employee\` ADD CONSTRAINT \`FK_f4b0d329c4a3cf79ffe9d565047\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`employee\` ADD CONSTRAINT \`FK_8a0634703b54978a2fa6f775209\` FOREIGN KEY (\`sectionId\`) REFERENCES \`section\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_9f43b335df2357a0b3149e6bb5c\` FOREIGN KEY (\`sectionId\`) REFERENCES \`section\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_618194d24a7ea86a165d7ec628e\` FOREIGN KEY (\`productCategoryId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_c864ab8454ed95237e3721ab1cd\` FOREIGN KEY (\`checkProductId\`) REFERENCES \`check_product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`section\` ADD CONSTRAINT \`FK_dcacdb97ef1d86c168dd6b6bd56\` FOREIGN KEY (\`departmentId\`) REFERENCES \`department\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`section\` DROP FOREIGN KEY \`FK_dcacdb97ef1d86c168dd6b6bd56\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_c864ab8454ed95237e3721ab1cd\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_618194d24a7ea86a165d7ec628e\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_9f43b335df2357a0b3149e6bb5c\``);
        await queryRunner.query(`ALTER TABLE \`employee\` DROP FOREIGN KEY \`FK_8a0634703b54978a2fa6f775209\``);
        await queryRunner.query(`ALTER TABLE \`employee\` DROP FOREIGN KEY \`FK_f4b0d329c4a3cf79ffe9d565047\``);
        await queryRunner.query(`ALTER TABLE \`department\` DROP FOREIGN KEY \`FK_1c9f0159b4ae69008bd356bb1ce\``);
        await queryRunner.query(`ALTER TABLE \`section\` CHANGE \`departmentId\` \`departmentId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`section\` ADD CONSTRAINT \`FK_dcacdb97ef1d86c168dd6b6bd56\` FOREIGN KEY (\`departmentId\`) REFERENCES \`department\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product\` CHANGE \`checkProductId\` \`checkProductId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`product\` CHANGE \`productCategoryId\` \`productCategoryId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`product\` CHANGE \`sectionId\` \`sectionId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_c864ab8454ed95237e3721ab1cd\` FOREIGN KEY (\`checkProductId\`) REFERENCES \`check_product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_618194d24a7ea86a165d7ec628e\` FOREIGN KEY (\`productCategoryId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_9f43b335df2357a0b3149e6bb5c\` FOREIGN KEY (\`sectionId\`) REFERENCES \`section\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`employee\` CHANGE \`sectionId\` \`sectionId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`employee\` CHANGE \`userId\` \`userId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`employee\` ADD CONSTRAINT \`FK_8a0634703b54978a2fa6f775209\` FOREIGN KEY (\`sectionId\`) REFERENCES \`section\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`employee\` ADD CONSTRAINT \`FK_f4b0d329c4a3cf79ffe9d565047\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`department\` CHANGE \`companyId\` \`companyId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`department\` ADD CONSTRAINT \`FK_1c9f0159b4ae69008bd356bb1ce\` FOREIGN KEY (\`companyId\`) REFERENCES \`company\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
