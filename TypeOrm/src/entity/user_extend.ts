import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";


@Entity("user_extend", { schema: "test_typeorm" })
export class UserExtend {

  @PrimaryGeneratedColumn({
    type: "int",
    name: "id"
  })
  id: number;


  @Column("varchar", {
    nullable: true,
    name: "QQ"
  })
  qq: string | null;


  @Column("varchar", {
    nullable: true,
    name: "address"
  })
  address: string | null;


  @Column("int", {
    nullable: true,
    name: "user_id"
  })
  userId: number | null;

}
