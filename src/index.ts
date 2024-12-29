#! /usr/bin/env node

import { program } from "commander";
import { help } from "./commands/help";

program.command("hello").description("Display hello message").action(help);
program.parse(process.argv);
