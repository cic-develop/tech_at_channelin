package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	"channelin/x/channelin/types"
)

func (k Keeper) SayHello(goCtx context.Context, req *types.QuerySayHelloRequest) (*types.QuerySayHelloResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	// Validation and Context unwrapping
	ctx := sdk.UnwrapSDKContext(goCtx)

	_ = ctx
	// Custom Response
	return &types.QuerySayHelloResponse{Name: fmt.Sprintf("Hello %s!", req.Name)}, nil
}
