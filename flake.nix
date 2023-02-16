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
      devShell = pkgs.mkShell
        {
          nativeBuildInputs = with pkgs; [
            eb-garamond
            just
            nodePackages.pnpm
            nodejs
            pandoc
            tectonic
          ];
          FONT_DIR = "${pkgs.eb-garamond}/share/fonts/opentype";
          shellHook = ''
            export PATH="$PWD/node_modules/.bin:$PATH"
            just 2>/dev/null
          '';
        };
    });
}
