package com.pc_buy.pcbuy.models.repo;

import com.pc_buy.pcbuy.models.Catalog;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CatalogRepository extends CrudRepository<Catalog, Long> {

    List<Catalog> findAllByTitleContains(String searchQuery);
}
