#! /usr/bin/env node

import { program } from "commander";
import { help } from "./commands/help";
import { update } from "./commands/update";

program.command("hello").description("Display hello message").action(help);
program
  .command("update")
  .description("Updates ghost with latest post")
  .action(update);
program.parse(process.argv);
