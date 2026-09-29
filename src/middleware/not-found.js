export function routeTidakDitemukan(req, res) {
    req.status(404).json({
        success: false,
        error:{
            code:"ROUTE_NOT_FOUND",
            message: `Route${req.method} ${req.originalUrl} tidak ditemukan.`
        }
    });
}