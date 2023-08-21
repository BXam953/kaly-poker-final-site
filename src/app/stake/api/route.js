import Stripe from "stripe";
import { NextResponse } from "next/server";


export async function POST(request){
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    let data = await request.json();
    let priceId = (data.priceID*105);
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    currency: 'cad',
                    product: 'prod_OA1jQsxEyZ4NO3',
                    unit_amount: priceId,
                },
                quantity: 1,
            }
        ],
        mode: 'payment',
        success_url: 'https://www.kalypoker.com',
        cancel_url: 'https://www.kalypoker.com',
    })
    return NextResponse.json(session.url);
}
