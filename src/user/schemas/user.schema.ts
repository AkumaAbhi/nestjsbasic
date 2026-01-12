
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop()
     name : String

    @Prop()
    email : String
    
    @Prop()
    password : String

    @Prop()
    role : string
}

export const UserSchema = SchemaFactory.createForClass(User);
