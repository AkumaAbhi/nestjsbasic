
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({required : true})
     name : String

    @Prop({required : true})
    email : String
    
    @Prop({required : true})
    password : String

    @Prop({required : true,
        default : "student"
    })
    role : string
}

export const UserSchema = SchemaFactory.createForClass(User);
