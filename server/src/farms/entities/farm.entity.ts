import { Building } from 'src/buildings/entities/building.entity';
import {
 Column,
 Entity,
 OneToMany,
 PrimaryGeneratedColumn, 
} from 'typeorm';

@Entity('farms')
export class Farm {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Building, (building) => building.farmId)
  buildings: Building[];
}
