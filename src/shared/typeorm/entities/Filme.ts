import {
 Column,
 CreateDateColumn,
 Entity,
 PrimaryGeneratedColumn,
 UpdateDateColumn
} from 'typeorm';
@Entity('filmes')
export default class Filme {
 @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  director: string;
  @Column({ type: 'date' })
  release_date: Date;
  @Column()
  genre: string;
  @Column('text')
  synopsis: string;
  @Column('text')
  lead_actors: string;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
}