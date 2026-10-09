package permis.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SitemapController {

    @Value("${app.frontend.url}")
    private String frontendUrl;

    @GetMapping(value = "/sitemap.xml", produces = MediaType.APPLICATION_XML_VALUE)
    public String getSitemap() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
                "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n" +
                "    <url>\n" +
                "        <loc>" + frontendUrl + "/</loc>\n" +
                "        <changefreq>weekly</changefreq>\n" +
                "        <priority>1.0</priority>\n" +
                "    </url>\n" +
                "    <url>\n" +
                "        <loc>" + frontendUrl + "/cgv</loc>\n" +
                "        <changefreq>monthly</changefreq>\n" +
                "        <priority>0.3</priority>\n" +
                "    </url>\n" +
                "    <url>\n" +
                "        <loc>" + frontendUrl + "/mentions-legales</loc>\n" +
                "        <changefreq>monthly</changefreq>\n" +
                "        <priority>0.3</priority>\n" +
                "    </url>\n" +
                "</urlset>";
    }
}