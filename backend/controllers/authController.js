export const login = async (req,res)=>{
    res.json({
        data:"You hit the login hitpoint"
    })
};

export const signup = async (req,res)=>{
    res.json({
        data:"You hit the signup hitpoint"
    })
};

export const logout = async (req,res)=>{
    res.json({
        data:"You hit the logout hitpoint"
    })
}