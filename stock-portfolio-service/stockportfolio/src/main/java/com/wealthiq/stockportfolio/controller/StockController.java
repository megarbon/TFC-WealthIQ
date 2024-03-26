package com.wealthiq.stockportfolio.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.wealthiq.stockportfolio.model.Stock;
import com.wealthiq.stockportfolio.service.StockService;

import java.util.List;

@RestController
@RequestMapping("/stocks")
public class StockController {

    private final StockService stockService;

    public StockController(StockService stockService) {
        this.stockService = stockService;
    }

    @GetMapping("/getAll") // ✅
    public ResponseEntity<List<Stock>> getAllStocks() {
        try {
            List<Stock> stocks = stockService.getAllStocks();
            return new ResponseEntity<>(stocks, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/{id}") // ✅
    public ResponseEntity<Stock> getStock(@PathVariable("id") Long id) {
        Stock stock = stockService.getStockById(id);
        if (stock == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(stock, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> createStock(@RequestBody Stock stock) {
        try {
            Stock createdStock = stockService.saveStock(stock);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdStock);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteStock(@PathVariable("id") Long id) {
        try {
            stockService.deleteStock(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}
