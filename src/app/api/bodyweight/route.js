import { generateBodyweightWorkout } from "../../../utils/generateWorkout";

export async function GET() {
  try {
    const workout = await generateBodyweightWorkout();
    return Response.json(workout);
  } catch (err) {
    return new Response("Error generating workout", { status: 500 });
  }
}
