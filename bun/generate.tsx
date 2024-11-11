const generateFolderExport = async (base: string) => {
  console.log("---------------------------");
  console.log("Init generate " + base);
  console.log("---------------------------");

  const URL_COMPONENT = `./node_modules/fenextjs-${base}/cjs`;
  const IMPORT_COMPONENT = `fenextjs-${base}/cjs`;

  const glob = new Bun.Glob("**/*.js");

  const listExport: string[] = [];

  for await (const path of glob.scan(URL_COMPONENT)) {
    if(path == "index.js"){
        continue;
    }
    const pathForlder = `${path}`.replace("/index.js", "").replace(".js", "");
    const nPath = `${pathForlder}/index.tsx`;
    const _export = `export * from "${IMPORT_COMPONENT}/${pathForlder}";`;

    await Bun.write(`./src/${base}/${nPath}`, `${_export}`, {
      createDirs: true,
    });

    listExport.push(`export * from "./${pathForlder}";`);
  }
  await Bun.write(`./src/${base}/index.tsx`, `${listExport.join("\n")}`, {
    createDirs: true,
  });

  console.log("---------------------------");
  console.log("Finish generate " + base);
  console.log("---------------------------");
};

const main = async () => {
  console.log("---------------------------");
  console.log("Init generate");
  console.log("---------------------------");

  await generateFolderExport("interface");
  await generateFolderExport("error");
  // await generateFolderExport("validator");
  await generateFolderExport("functions");
  await generateFolderExport("firebase");
  // await generateFolderExport("date");
  await generateFolderExport("hook");
  await generateFolderExport("svg");
  await generateFolderExport("component");
  await generateFolderExport("img-placeholder");
  await generateFolderExport("export");

  console.log("---------------------------");
  console.log("Finish generate");
  console.log("---------------------------");
};
main();
