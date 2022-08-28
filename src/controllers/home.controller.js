import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class HomeController {
  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async getHomePage(req, res) {
    if (req.isAuthenticated()) {
      req.session.pageVisitCount = 1;
      const upatedUser = await prisma.user.update({
        where: {
          id: req.user.id,
        },
        data: {
          visits: {
            increment: 1,
          },
        },
      });
      req.session.pageVisitCount = upatedUser.visits;
    }
    res.locals.title = "Home - Nethrenial Co.";
    res.locals.isAuthenticated = !!req.isAuthenticated();
    return res.render("pages/index", {
      pageVisitCount: req.session.pageVisitCount,
    });
  }
}

export const homeController = new HomeController();
