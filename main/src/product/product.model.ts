import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document, HydratedDocument} from "mongoose";

export type ProductDocument = Product & Document

// export type ProductDocument = HydratedDocument<Product>

@Schema()
export class Product {
    @Prop()
    id: number;

    @Prop()
    title: string;

    @Prop()
    image: string;

    @Prop()
    likes: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);