import { Injectable } from "@nestjs/common";
import { Repository, EntityManager } from "typeorm";
import { InjectEntityManager, InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private _userRepo: Repository<User>,
    
    // @InjectEntityManager()
    // private readonly entityManager: EntityManager
  ) {}

  async getUser() {
    let id = 1;
    let q = await this._userRepo.findOne({where: {id}});
    if (q.stock < 1) {
      return {
        stock: q.stock,
      };
    }
    const user = await this._userRepo.update(id, {
      stock: q.stock - 1,
    });
    // await this.entityManager.transaction(async (manager) => {
    //   try {
    //     const user = await manager.getRepository(User)
    //       .createQueryBuilder()
    //       .where(`id = 1`)
    //       .getOne();
    //     console.log(user);

    //     let total = user.stock - 1;
    //     console.log(total);
    //     if (total < 0) {
    //       return {
    //         stock: user.stock,
    //       };
    //     }
    //     let update = await manager.getRepository(User).update(id, {
    //       stock: total,
    //     });
    //     console.log(update);
        
    //     return user;
    //   } catch (error) {
    //     console.log(error);

    //     // await this._userRepo.queryRunner.rollbackTransaction();
    //   } finally {
    //     // await this._userRepo.queryRunner.release();
    //   }
    // });
  }
}
