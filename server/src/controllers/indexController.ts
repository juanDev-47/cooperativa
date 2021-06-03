import { Request, Response } from 'express';


class IndexController {


    index (req: Request, res: Response) {
        res.send('hello desde el contorller');
    }


}

export const indexController = new IndexController();