package org.comfort42.busking.web.adapter.inbound;

import lombok.RequiredArgsConstructor;
import org.comfort42.busking.application.domain.model.Report;
import org.comfort42.busking.application.port.inbound.LoadReportUseCase;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/reports")
@RequiredArgsConstructor
public class LoadReportController {

    private final LoadReportUseCase loadReportUseCase;

    @GetMapping
    ResponseEntity<?> loadReportList(){
        try{
            return ResponseEntity.ok().body(loadReportUseCase.loadReportList());
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<String>("에러", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/{reportId}")
    ResponseEntity<?> loadReportById(@PathVariable Long reportId){
        try{
            return ResponseEntity.ok().body(loadReportUseCase.loadReportById(new Report.ReportId(reportId)));
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<String>("에러", HttpStatus.BAD_REQUEST);
        }
    }
}
