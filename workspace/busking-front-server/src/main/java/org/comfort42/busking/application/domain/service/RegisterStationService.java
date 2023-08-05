package org.comfort42.busking.application.domain.service;

import lombok.RequiredArgsConstructor;
import org.comfort42.busking.application.domain.model.Station;
import org.comfort42.busking.application.port.inbound.RegisterStaionUseCase;
import org.comfort42.busking.application.port.inbound.StationCommand;
import org.comfort42.busking.application.port.outbound.RegisterStationPort;
import org.comfort42.busking.common.UseCase;

@UseCase
@RequiredArgsConstructor
public class RegisterStationService implements RegisterStaionUseCase {

    private final RegisterStationPort registerStationPort;

    @Override
    public void registerStation(StationCommand stationCommand) {
        registerStationPort.registerStation(new Station(null,stationCommand.getName(),stationCommand.getLng(), stationCommand.getLat()));
    }
}
