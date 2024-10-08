package com.backendwealthiq.controllers.portfolio;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.backendwealthiq.models.portfolio.Asset;
import com.backendwealthiq.services.portfolio.AssetService;

import java.util.List;

@RestController
@RequestMapping("/assets")
@CrossOrigin("*")
public class AssetController {

    private final AssetService stockService;

    public AssetController(AssetService stockService) {
        this.stockService = stockService;
    }

    @GetMapping("/getAll") // ✅
    public ResponseEntity<List<Asset>> getAllStocks() {
        try {
            List<Asset> stocks = stockService.getAllStocks();
            return new ResponseEntity<>(stocks, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/{id}") // ✅
    public ResponseEntity<Asset> getStock(@PathVariable("id") Long id) {
        Asset stock = stockService.getStockById(id);
        if (stock == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(stock, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> createStock(@RequestBody Asset stock) {
        try {
            Asset createdStock = stockService.saveStock(stock);
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
