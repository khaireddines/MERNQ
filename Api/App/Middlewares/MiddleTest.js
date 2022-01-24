export const MiddleTest = (req, res, next) =>{
    if (req.get('x-auth-key') !== process.env.X_Auth_Key)
        res.redirect('http://www.google.com')
    else
        next()
}
