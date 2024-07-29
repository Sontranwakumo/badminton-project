import { exec } from 'child_process';
import * as dotenv from 'dotenv';

dotenv.config();

const runCommand = (command: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        reject(error);
      }
      if (stderr) {
        console.error(`Stderr: ${stderr}`);
        reject(new Error(stderr));
      }
      console.log(stdout);
      resolve();
    });
  });
};

const createDatabase = async () => {
    console.log("Create database, input database password");
    const command = `psql -U ${process.env.POSTGRES_USER} -a -c "CREATE DATABASE ${process.env.POSTGRES_DB};"`;
    await runCommand(command);
};

createDatabase();

/**
 * psql -U postgres -a \
    -c "SELECT 'CREATE DATABASE testdb2'  WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'testdb2');"
 */