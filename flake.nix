{
  description = "Hazel's website";
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs = { self, flake-utils, nixpkgs }: {
    overlay = _: _: { };
  } // flake-utils.lib.eachSystem [ "aarch64-darwin" "x86_64-darwin" "x86_64-linux" ] (system:
    let
      pkgs = import nixpkgs {
        inherit system; overlays = [ self.overlay ];
        config = { allowUnfree = true; };
      };
    in
    {
      devShell = pkgs.mkShell {
        nativeBuildInputs = with pkgs; [
          just
          netlify-cli
          nodePackages.pnpm
          nodejs
        ];
      };
    });
}
