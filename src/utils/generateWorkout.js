import { readFile } from "fs/promises";
import { parse } from "csv-parse/sync";

export async function generateBodyweightWorkout() {
  try {
    const file = await readFile("fitness_exercises.csv", "utf8");
    const records = parse(file, {
      columns: true,
      skip_empty_lines: true,
    });
    const bodyweightExerciseNames = records.filter(
      (x) => x.equipment === "body weight"
    );
    const bodyweightLegsExercise = bodyweightExerciseNames
      .filter((x) => x.target == "legs")
      .map((x) => x.name);
    const bodyweightCardioExercise = bodyweightExerciseNames
      .filter((x) => x.target == "cardio")
      .map((x) => x.name);
    const bodyweightShouldersExercise = bodyweightExerciseNames
      .filter((x) => x.target == "shoulders")
      .map((x) => x.name);
    const bodyweightArmsExercise = bodyweightExerciseNames
      .filter((x) => x.target == "arms")
      .map((x) => x.name);
    const bodyweightBackExercise = bodyweightExerciseNames
      .filter((x) => x.target == "back")
      .map((x) => x.name);
    const bodyweightAbsExercise = bodyweightExerciseNames
      .filter((x) => x.target == "abs")
      .map((x) => x.name);
    const bodyweightChestExercise = bodyweightExerciseNames
      .filter((x) => x.target == "chest")
      .map((x) => x.name);
    const bodyweightFullBodyExercises = [
      bodyweightLegsExercise[
        generateRandomNumber(bodyweightLegsExercise.length)
      ],
      bodyweightCardioExercise[
        generateRandomNumber(bodyweightCardioExercise.length)
      ],
      bodyweightShouldersExercise[
        generateRandomNumber(bodyweightShouldersExercise.length)
      ],
      bodyweightArmsExercise[
        generateRandomNumber(bodyweightArmsExercise.length)
      ],
      bodyweightBackExercise[
        generateRandomNumber(bodyweightBackExercise.length)
      ],
      bodyweightAbsExercise[generateRandomNumber(bodyweightAbsExercise.length)],
      bodyweightChestExercise[
        generateRandomNumber(bodyweightChestExercise.length)
      ],
    ];

    return bodyweightFullBodyExercises;
  } catch (err) {
    console.error(err);
  }
}

function generateRandomNumber(length) {
  return Math.floor(Math.random() * length);
}
