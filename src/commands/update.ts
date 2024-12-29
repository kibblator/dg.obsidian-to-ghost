import chalk from "chalk";
import config from "config";

export const update = () => {
  console.log(chalk.blue("Updating ghost posts..."));

  const apiKey = config.get("ghost.apiKey");
};
