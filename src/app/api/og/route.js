import { ImageResponse } from "next/og";

export async function GET(){
    return new ImageResponse(
        (
            <div tw="text-7xl bg-teal-600 w-full h-full flex text-center items-center justify-center">
                <h1 tw="text-white">Khana Khazana</h1>
            </div>
        ),
        {
            width: 1200,
            height: 600,
        }
    );
}