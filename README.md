

## Dependencies and Set-Up
- Create Next.js project:
```bash
yarn create next-app .
```

- Add Moralis web3uikit to interact with front-end:
```bash
yarn add moralis react-moralis web3uikit

```
- Add tailwindcss (CSS formarter):
```bash
yarn add --dev tailwindcss postcss autoprefixer
```
or 
```bash
npm install tailwindcss postcss autoprefixer
```

- Initialize tailwindcss:
```bash
yarn tailwindcss init -p
```
or
```bash
npx tailwindcss init -p
```

- Override [tailwind.config.js]() with the code inside this file.
- Override [global.css]()

- Run local yarn server:
```bash
yarn dev
```
You will have your local server running at: `http://localhost:3000`.

- Open new bash terminal to use while yarn server is running

## Export code

Once our Front-End code is finished..
1. Export our code to a Bundle.
2. Upload the Bundle to IPFs to be fully decentralized.

- Execute:
```bash
yarn next build
yarn next export
```
A file called `out` is going to be generated with our exported code.

## Upload to IPFS

1. Open IPFS.
2. Go to Files.
3. Import `out` directory.
4. Click 'set pinning.

DONE! ✅ 

5. Copy CID.
6. Go to Browher and paste ipfs://CID.

## Resources
- [Full-stack-web3-connectors](https://github.com/PatrickAlphaC/full-stack-web3-metamask-connectors): a repo that contains different ways of using web3 connectors.
- [Nextjs repo](https://github.com/PatrickAlphaC/nextjs-moralis-metamask-connect/tree/cd4ff2ce34ecec6874e8fa32df8f44cef962b6e7): repo that we are going to work with.
- [Hardhat simple storage](https://github.com/PatrickAlphaC/hardhat-simple-storage): Patricks repo clonned to run our own local Blockchain network and interact with its Smart Contracts.
- [web3uikit](https://github.com/web3ui/web3uikit): Can be used for the front end to interact when user changes account or connect/disconnect.
- [tailwindcss with Nextjs](https://tailwindcss.com/docs/guides/nextjs): CSS formater.# raffle-frontend
