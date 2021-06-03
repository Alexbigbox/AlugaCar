import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface iRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    constructor(private specificationsRepository: ISpecificationsRepository) {
        
    }

    execute({ name, description }: iRequest ): void {
        const specificationAlreadyExists = this.specificationsRepository.findByName(
            name
        );
        this.specificationsRepository.create({
            name,
            description,
        })
    }
}

export { CreateSpecificationService };