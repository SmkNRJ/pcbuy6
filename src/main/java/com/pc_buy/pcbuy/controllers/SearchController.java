package com.pc_buy.pcbuy.controllers;

import com.pc_buy.pcbuy.models.Catalog;
import com.pc_buy.pcbuy.models.repo.CatalogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class SearchController {

    @Autowired
    CatalogRepository catalogRepository;

    @GetMapping(value="/search")
    public String search(Model model, @RequestParam("searchTerm") String searchTerm) {
        model.addAttribute("searchTerm", searchTerm);
        model.addAttribute("searchResult", catalogRepository.findAllByTitleContains(searchTerm));

        return "search-result";
    }

//    @GetMapping("/search")
//    public String catalog(Model model){
//        Iterable<Catalog> catalogs = catalogRepository.findAll();
//        model.addAttribute("catalog", catalogs);
//        return "search-result";
//    }

}