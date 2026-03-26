const conf = {
    MONGODB_URI: String(process.env.MONGODB_URI),
    PORT: Number(process.env.PORT) || 3000,
    CORS_ORIGIN: String(process.env.CORS_ORIGIN.split(",")),
    ENCRYPTION_KEY: String(process.env.ENCRYPTION_KEY),
    jwtSecret: String(process.env.jwtSecret),
    expiresIn: String(process.env.expiresIn),
};

export default conf;
